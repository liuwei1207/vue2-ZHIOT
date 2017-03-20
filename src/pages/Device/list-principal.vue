<template>
    <div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK() {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
}
</script>
