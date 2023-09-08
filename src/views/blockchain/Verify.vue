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
            <CCol :xs="12" v-if="showMessage">
              <p>message:{{ message }}</p>
              <p>root:{{ root }}</p>
              <p>digest:{{ digest }}</p>
              <p>valuehash:{{ valuehash }}</p>
              <p>hash:{{ hash }}</p>
            </CCol>
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
            </CCol>
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
      root: '',
      digest: '',
      valuehash: '',
      hash: '',
      showMessage1: false, // 新增一个用于控制是否显示一句话的状态
      message1: '',
      key: '',
      value: '',
      key1: '',
      value1: '',
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
                this.message = response.data.message
                this.root = response.data.root
                this.digest = response.data.digest
                this.hash = response.data.hash
                this.valuehash = response.data.valuehash
              })
              .catch((error) => {
                // 处理请求出错的情况
                console.error('An error occurred:', error)
                this.validatedCustom01 = false
                this.showMessage = true
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
