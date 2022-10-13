<template >
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
        <div class="text-center bg-gray-50">
            <h1>Your profile</h1>
            <div class="row mt-5 profile-container p-2">
                <div class="profile-edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </div>
                <div class="col-4">
                    <div class="profile-photo">
                        <img src="https://th.bing.com/th/id/R.cac75df69065c2735d9f14280bccb829?rik=D1M5WzMfudrkOQ&pid=ImgRaw&r=0" alt="">
                    </div>                    
                </div>
                <div class="col-7 offset-1">
                    <table class="table profile-table">
                        <tr>
                            <th>Name:</th>
                            <th>{{userData.name}}</th>
                        </tr>
                        <tr>
                            <th>Surname:</th>
                            <th>{{userData.surname}}</th>
                        </tr>
                        <tr>
                            <th>Age:</th>
                            <th>{{userData.age}}</th>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <th>{{getKeyByValueEnum(Gender, userData.gender)}}</th>
                        </tr>
                        <tr>
                            <th>Weight:</th>
                            <th>{{userData.weight}}kg</th>
                        </tr>
                        <tr>
                            <th>Height:</th>
                            <th>{{userData.height}}m</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <app-input :label="'Name'" v-model="editUserData.name" />
                            <app-input :label="'Surname'" v-model="editUserData.surname" />
                            <app-input :label="'Age'" v-model="editUserData.age" />
                            <app-input :label="'Gender'" v-model="editUserData.gender" :selectLabel="'Select Gender'" :selectList="genderList" />
                            <app-input :label="'Weight'" v-model="editUserData.weight" />
                            <app-input :label="'Height'" v-model="editUserData.height" />
                            <label class="form-label" for="customFile">Upload profile photo</label>
<input type="file" class="form-control" id="customFile" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="closeElem">Close</button>
                            <button type="button" class="btn btn-primary" @click="submitEditProfile">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script lang="ts">
import { Gender, IUserData } from '@/model/IUserData';
import { getEnumArray, getKeyByValueEnum } from '@/services/getEnumObject';
import { generate } from '@vue/compiler-core';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const userData = ref<IUserData>({
            age: 20,
            gender: Gender.Male,
            height: 1.83,
            weight: 100,
            name: "Dinoel",
            surname: "Pirnpuu"
        });

        const editUserData = ref<IUserData>({
            age: 20,
            gender: Gender.Male,
            height: 1.83,
            weight: 100,
            name: "Dinoel",
            surname: "Pirnpuu"
        });

        const closeElem = ref();

        const hideEditModal =  () => {
            editUserData.value = userData.value;
            closeElem.value.click();
        };

        const submitEditProfile = () => {
                userData.value = editUserData.value;
                hideEditModal();
        }

        const genderList = getEnumArray(Gender); 

        return {closeElem, submitEditProfile, editUserData, userData, genderList, getKeyByValueEnum, Gender};
    }
})
</script>
<style lang="">
    
</style>