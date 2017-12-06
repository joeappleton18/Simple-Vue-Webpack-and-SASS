<template>

    <div class="example">
        <h2>Here is our component</h2>
        {{ msg }}


    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello world!'
            }
        }
    }
</script>
