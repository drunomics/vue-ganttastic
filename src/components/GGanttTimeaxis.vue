<template>
  <div class="g-timeaxis">
    <div class="g-timeunits-container g-timeunits-low">
      <div
        v-for="({ label, value, date, width }, index) in timeaxisUnits.lowerUnits"
        :key="label"
        class="g-timeunit g-timeunit-low"
        :style="{
          flexDirection: precision === 'hour' ? 'column' : 'row',
          alignItems: precision === 'hour' ? '' : 'center',
          width
        }"
      >
        <span v-if="index === 0" class="g-timeunit-low-kw">KW</span>
        <slot name="timeunit" :label="label" :value="value" :date="date">
          {{ label }}
        </slot>
        <div
          v-if="precision === 'hour'"
          class="g-timeaxis-hour-pin"
          :style="{ background: colors.text }"
        />
      </div>
    </div>

    <div class="g-timeunits-container g-timeunits-upper">
      <div
        v-for="{ label, value, date, width } in timeaxisUnits.upperUnits"
        :key="label"
        class="g-upper-timeunit"
        :style="{
          width
        }"
      >
        <slot name="upper-timeunit" :label="label" :value="value" :date="date">
          {{ label }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import provideConfig from "../provider/provideConfig.js"
import useTimeaxisUnits from "../composables/useTimeaxisUnits.js"

const { precision, colors } = provideConfig()
const { timeaxisUnits } = useTimeaxisUnits()
</script>

<style>
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  background: white;
  z-index: 4;
  display: flex;
  flex-direction: column;
}

.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}

.g-timeunits-low {
  height: 24px;
  display: flex;
  gap: 2px;
}

.g-timeunits-upper {
  height: 41px;
}

.g-timeunit-low:nth-child(odd) {
  color: #4c5356;
  font-size: 12px;
  line-height: 15.6px;
}

.g-timeunit-low {
  position: relative;
  display: flex;
  justify-content: center;

  width: 30px;
  height: 24px;
  color: #7a8084;

  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-align: center;

  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.g-timeunit-low-kw {
  position: absolute;
  top: -10px;

  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.g-timeunit {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0f1f2;

  color: #636a6d;
  font-size: 16px;
  font-weight: 400;
  line-height: 24.8px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
</style>
