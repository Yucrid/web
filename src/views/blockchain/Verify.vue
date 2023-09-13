<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>数据验证</strong>
        </CCardHeader>
        <CCardBody>
          <CForm
            class="row g-3 needs-validation"
            novalidate
            :validated="validatedCustom01"
            @submit="handleSubmitCustom01"
          >
            <CCol :md="4">
              <CFormLabel for="validationCustom01">Key</CFormLabel>
              <CFormInput id="validationCustom01" v-model="key" required />
              <CFormFeedback valid> Looks good! </CFormFeedback>
            </CCol>
            <CAlert v-if="showMessage" :color="alertColor">
              <p class="mb-0">{{ message }}</p>
            </CAlert>
            <CAccordion v-if="showMessage">
              <CAccordionItem :item-key="1">
                <CAccordionHeader> 哈希验证 </CAccordionHeader>
                <CAccordionBody>
                  <p><strong>value :</strong> {{ value }}</p>
                  <p><strong>区块链哈希值 : </strong> {{ blockchainValue }}</p>
                  <p><strong>数据库哈希值: </strong> {{ databaseValue }}</p>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem :item-key="2">
                <CAccordionHeader> 默克尔验证 </CAccordionHeader>
                <CAccordionBody>
                  <p><strong>根哈希:</strong> {{ root }}</p>
                  <p><strong>计算结果: </strong> {{ hash }}</p>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
            <CCol :xs="12">
              <CButton color="primary" type="submit">Submit form</CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>数据溯源</strong>
        </CCardHeader>
        <CCardBody>
          <CForm
            class="row g-3 needs-validation"
            novalidate
            :validated="validatedCustom02"
            @submit="handleSubmitCustom02"
          >
            <CCol :md="4">
              <CFormLabel for="validationCustom03">Key</CFormLabel>
              <CFormInput id="validationCustom03" v-model="key1" required />
              <CFormFeedback valid> Looks good! </CFormFeedback>
            </CCol>
            <CCol :xs="12" v-if="showMessage1">
              <p>{{ message1 }}</p>
              <p>{{ valueHashList }}</p>
            </CCol>
            <CCard>
              <CTable>
                <thead>
                  <tr>
                    <th>ValueHash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(hash, index) in valueHashList" :key="index">
                    <td>{{ hash }}</td>
                  </tr>
                </tbody>
              </CTable>
            </CCard>
            <CCol :xs="12">
              <CButton color="primary" type="submit">Submit form</CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Validation',
  data: () => {
    return {
      validatedCustom01: null,
      validatedCustom02: null,
      showMessage: false, // 新增一个用于控制是否显示一句话的状态
      success: '',
      alertColor: '',
      message: '',
      root: '',
      blockchainValue: '',
      databaseValue: '',
      valueHashList: [],
      valuehash: '',
      hash: '',
      number: '',
      key: '',
      value: '',
      key1: '',
      //verify
      message1: '',
      showMessage1: false, // 新增一个用于控制是否显示一句话的状态
    }
  },
  methods: {
    handleSubmitCustom01(event) {
      const form = event.currentTarget
      event.preventDefault()
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        axios
          .post('/block/get_digest', {
            key: this.key,
          })
          .then((response) => {
            // 处理服务器返回的数据
            this.message = response.data.message
            axios
              .post('/api/get-data', {
                key: this.key,
                message: this.message,
              })
              .then((response) => {
                // 处理服务器返回的数据
                this.validatedCustom01 = true
                this.showMessage = true
                this.success = response.data.success
                this.message = response.data.message
                if (this.success === true) {
                  this.alertColor = 'success'
                } else if (this.success === false) {
                  this.alertColor = 'danger'
                }
                this.blockchainValue = response.data.blockchainHash
                this.databaseValue = response.data.databaseHash
                this.value = response.data.value
                this.root = response.data.root
                this.hash = response.data.hash
                this.valuehash = response.data.valuehash
                this.number = response.data.number
              })
              .catch((error) => {
                // 处理请求出错的情况
                console.error('An error occurred:', error)
                this.validatedCustom01 = false
                this.showMessage = true
                this.alertColor = 'warning'
                this.message = 'An error occurred duringf form submission.'
              })
          })
          .catch((error) => {
            // 处理请求出错的情况
            // 处理请求出错的情况
            console.error('An error occurred duringe form submission:', error)
            this.validatedCustom01 = false
            this.showMessage = true
            this.message = 'An error occurred duringg form submission.'
          })
      }
      this.validatedCustom01 = true
    },
    handleSubmitCustom02(event) {
      const form = event.currentTarget
      event.preventDefault()
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        axios
          .post('/block/get_history', {
            key: this.key1,
          })
          .then((response) => {
            // 处理服务器返回的数据
            this.validatedCustom02 = true
            this.showMessage1 = true
            this.message1 = response.data.message
            this.valueHashList = response.data.valueHash
          })
          .catch((error) => {
            // 处理请求出错的情况
            console.error('An error occurred during form submission:', error)
            this.validatedCustom02 = false
            this.showMessage1 = true
            this.message1 = 'An error occurred during form submission.'
          })
      }
      this.validatedCustom02 = true
    },
    handleSubmitDefault01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      this.validatedDefault01 = true
    },
    handleSubmitTooltip01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      this.validatedTooltip01 = true
    },
  },
}
</script>
