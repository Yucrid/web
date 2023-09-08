<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>插入数据</strong> <small>(上链)</small>
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
            <CCol :md="4">
              <CFormLabel for="validationCustom02">Value</CFormLabel>
              <CFormInput id="validationCustom02" v-model="value" required />
              <CFormFeedback valid> Looks good! </CFormFeedback>
            </CCol>
            <CAlert v-if="showMessage" color="success">
              <p>您成功将数据存储到了数据库与区块链中!</p>
            </CAlert>
            <CAccordion v-if="showMessage">
              <CAccordionItem :item-key="1">
                <CAccordionHeader> 哈希值 </CAccordionHeader>
                <CAccordionBody>{{ hash }}</CAccordionBody>
              </CAccordionItem>
              <CAccordionItem :item-key="2">
                <CAccordionHeader> 区块信息 </CAccordionHeader>
                <CAccordionBody>
                  <p><strong>root</strong> {{ root }}</p>
                  <p><strong>number</strong> {{ number }}</p>
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
          <strong>更改数据</strong> <small>(不上链)</small>
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
            <CCol :md="4">
              <CFormLabel for="validationCustom04">Value</CFormLabel>
              <CFormInput id="validationCustom04" v-model="value1" required />
              <CFormFeedback valid> Looks good! </CFormFeedback>
            </CCol>
            <CAlert v-if="showMessage1" color="success">
              <p>您成功在数据库中更改了数据!</p>
              <hr />
              <p class="mb-0">{{ message1 }}</p>
            </CAlert>
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
      message: '',
      hash: '',
      root: '',
      number: '',
      showMessage1: false, // 新增一个用于控制是否显示一句话的状态
      message1: '',
      key: '',
      value: '',
      key1: '',
      value1: '',
      color: '',
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
          .post('/api/submit-data', {
            key: this.key,
            value: this.value,
          })
          .then((response) => {
            // 处理服务器返回的数据
            //this.validatedCustom02 = true
            //this.showMessage = true
            this.message = response.data.message
            axios
              .post('/block/put_data', {
                key: this.key,
                value: this.value,
              })
              .then((response) => {
                // 处理服务器返回的数据
                this.validatedCustom01 = true
                this.showMessage = true
                this.message = response.data.message
                const data = JSON.parse(this.message)
                this.hash = data.hash
                this.root = data.root
                this.number = data.number
              })
              .catch((error) => {
                // 处理请求出错的情况
                console.error('An error occurred :', error)
                this.validatedCustom01 = false
                this.showMessage = true
                this.message = 'An error occurred during form submission.'
              })
          })
          .catch((error) => {
            // 处理请求出错的情况
            console.error('An error occurred during form submission:', error)
            this.validatedCustom01 = false
            this.showMessage = true
            this.message = 'An error occurred during form submission.'
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
          .post('/api/change-data', {
            key: this.key1,
            value: this.value1,
          })
          .then((response) => {
            // 处理服务器返回的数据
            this.validatedCustom02 = true
            this.showMessage1 = true
            this.message1 = response.data.message
          })
          .catch((error) => {
            // 处理请求出错的情况
            console.error('An error occurred during form submission:', error)
            this.validatedCustom01 = false
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
