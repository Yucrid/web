<template>
  <CRow>
    <CCol>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Widgets</strong>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="">
            <CRow>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="bar"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-danger'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsBar"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="bar"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-primary'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsBar"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="bar"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-warning'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsBar"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="line"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-success'),
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsLine"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="line"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-warning'),
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsLine"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="line"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-info'),
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsLine"
                  />
                </CWidgetStatsE>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-settings" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="info" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-user" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="warning" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-moon" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="danger" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-bell" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-settings" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="info" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-user" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="warning" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-moon" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="danger" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-bell" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
            </CRow>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue List Group</strong> <small>Horizontal</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>layout=&#34;horizontal&#34;</code> to change the layout of
            list group items from vertical to horizontal across all breakpoints.
            Alternatively, choose a responsive variant
            <code
              >.layout=&#34;horizontal-&#123;sm | md | lg | xl |
              xxl&#125;&#34;</code
            >
            to make a list group horizontal starting at that breakpoint&#39;s
            <code>min-width</code>. Currently
            <strong
              >horizontal list groups cannot be combined with flush list
              groups.</strong
            >
          </p>
          <DocsExample href="components/list-group.html#flush">
            <template
              v-for="item in ['', '-sm', '-md', '-lg', '-xl', '-xxl']"
              :key="item"
            >
              <CListGroup class="mb-2" :layout="'horizontal' + item">
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
              </CListGroup>
            </template>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/vue-chartjs'
//import WidgetsStatsD from './WidgetsStatsTypeD.vue'
export default {
  name: 'Widgets',
  components: {
    CChart,
    //WidgetsStatsD,
  },
  setup() {
    const widgetStatsE = {
      labels: [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
      ],
      optionsBar: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
      optionsLine: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          },
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    }

    return {
      getStyle,
      widgetStatsE,
      widgetProgressIconItems: [
        { color: 'primary', icon: 'cil-puzzle' },
        { color: 'success', icon: 'cil-speedometer' },
        { color: 'danger', icon: 'cil-cursor' },
        { color: 'info', icon: 'cil-drop' },
        { color: 'secondary', icon: 'cil-pencil' },
      ],
    }
  },
}
</script>
