<template>
    <div class="row g-3 align-items-center mt-2">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">{{label}}</label>
        </div>
        <div class="col-auto" v-if="selectList && selectLabel">
            <!-- {{modelValue}} -->
            <select class="form-select" :value="modelValue"  @change="(e:any) => inputAction(e.target?.value)"> 
                <option>{{selectLabel}}</option>
                <option v-for="item in selectList" :key="item.key" :value="item.value">{{item.key}}</option>
              </select>
        </div>
        <div class="col-auto" v-else>
            <input :type="typeof(modelValue) == 'string' ? 'text' : 'number'" :value="modelValue" class="form-control" @input="(e:any) => inputAction(e.target?.value)"/>
            </div>
    </div>
</template>
<script lang="ts">
import { enumArray } from '@/services/getEnumObject';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "app-input",
    props: {
        label: {
            required: true,
            type: String
        },
        modelValue: {
            required: true,
            type: String || Number
        },
        selectList: {
            required: false,
            type: Object as () => enumArray[]
        },
        selectLabel: {
            required: false,
            type: String    
        }
    },
    emits: ["update:modelValue"],
    methods: {
        inputAction(value: any) {
            if(typeof value == "string")
                this.$emit('update:modelValue', value)
            else 
                this.$emit('update:modelValue', +value)
        } 
    }
});
</script>