<template >
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
        <div class="container">
            <div class="text-center bg-gray-50">
            <h1>Sinu profiil</h1>
            <div class="row mt-5 profile-container p-2">
              
                <div class="col-4" >
                    <div class="profile-photo" data-bs-toggle="modal"  data-bs-target="#uploadImgProfileModal">
                        <img src="https://th.bing.com/th/id/R.cac75df69065c2735d9f14280bccb829?rik=D1M5WzMfudrkOQ&pid=ImgRaw&r=0" alt="">
                    </div>                    
                </div>  
                <div class="profile-data col-5">
                    <div class="profile-edit-btn" data-bs-toggle="modal" data-bs-target="#editProfileModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </div>
                    <table class="table profile-table">
                        <tr>
                            <th>Eesnimi:</th>
                            <th>{{userData.name}}</th>
                        </tr>
                        <tr>
                            <th>Perekonnanimi:</th>
                            <th>{{userData.surname}}</th>
                        </tr>
                        <tr>
                            <th>Vanus:</th>
                            <th>{{getAgeFromDate(userData.DoB)}}</th>
                        </tr>
                        <tr>
                            <th>Sugu</th>
                            <th>{{getKeyByValueEnum(Gender, userData.gender)}}</th>
                        </tr>
                        <tr>
                            <th>Kaal:</th>
                            <th>{{userData.weight}}kg</th>
                        </tr>
                        <tr>
                            <th>Pikkus:</th>
                            <th>{{userData.height}}m</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
            <!-- Upload Profile IMG Modal -->
        <div class="modal fade" id="uploadImgProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Profile image</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label class="form-label" for="customFile">Upload profile photo</label>
                            <input type="file" class="form-control" id="customFile" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="closeImgElem">Close</button>
                            <button type="button" class="btn btn-primary" @click="submitUploadImgProfile">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Edit Profile data Modal -->
            <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <app-input :label="'Eesnimi'" v-model="editUserData.name" />
                            <app-input :label="'Perekonnanimi'" v-model="editUserData.surname" />
                            <div class="row g-3 align-items-center mt-2">
                                <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Sünnikuupäev</label>
                                </div>
                                <div class="col-auto">
                                    <Datepicker v-model="editUserData.DoB" />
                                </div>
                            </div>
                            <app-input :label="'Sugu'" v-model="editUserData.gender" :selectLabel="'Select Gender'" :selectList="genderList" />
                            <app-input :label="'Kaal'" v-model="editUserData.weight" />
                            <app-input :label="'Pikkus'" v-model="editUserData.height" />

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="closeElem">Close</button>
                            <button type="button" class="btn btn-primary" @click="submitEditProfile">Save changes</button>
                        </div>
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
import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
import { getAgeFromDate } from '@/services/date';

export default defineComponent({
    
    components: {Datepicker },
    setup() {
        const defaultDoB = new Date(2002, 9, 13).toString();
        const userData = ref<IUserData>({
            gender: Gender.Male,
            DoB: defaultDoB,
            height: 1.83,
            weight: 100,
            name: "Dinoel",
            surname: "Pirnpuu"
        });

        const editUserData = ref<IUserData>({
            gender: Gender.Male,
            DoB: defaultDoB,
            height: 1.83,
            weight: 100,
            name: "Dinoel",
            surname: "Pirnpuu"
        });
        
        const closeElem = ref();
        const closeImgElem = ref();

        const hideEditModal =  () => {
            editUserData.value = userData.value;
            closeElem.value.click();
        };

        const submitEditProfile = () => {
                userData.value = editUserData.value;
                hideEditModal();
        }
        const submitUploadImgProfile = () => {
                userData.value = editUserData.value;
                hideEditModal();
        }

        const genderList = getEnumArray(Gender); 

        return {getAgeFromDate, closeImgElem, submitUploadImgProfile, closeElem, submitEditProfile, editUserData, userData, genderList, getKeyByValueEnum, Gender};
    }
})
</script>
<style lang="">
    
</style>