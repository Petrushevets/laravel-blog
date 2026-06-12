<template>
    <div ref="modal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modalTitle }}</h5>
                    <button type="button" class="close">×</button>
                </div>
                <div class="modal-body">
                    <p>{{ modalContent }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="handleCancel">Close</button>
                    <button v-if="modalButton" type="button" class="btn" :class="modalButton.class"
                            @click="modalButton.action">
                        {{ modalButton.label }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as bootstrap from 'bootstrap';

window.bootstrap = bootstrap;

export default {
    data() {
        return {
            modalTitle: "Default Title",
            modalContent: "Default Content",
            modalButton: null,
            modal: null,
        };
    },

    mounted() {
        this.modal = new bootstrap.Modal(this.$refs.modal);
    },

    methods: {
        openModal({title, content, button}) {
            this.modalTitle = title || "Default Title";
            this.modalContent = content || "Default Content";
            this.modalButton = button || null;
            this.modal.show();
        },

        handleCancel() {
            this.modal.hide();
        }
    },
};
</script>