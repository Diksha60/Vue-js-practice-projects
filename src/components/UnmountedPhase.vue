<template>
    <h1>Unmounted Phase of Lifecycle Methods</h1>
<ChildUnmounted v-if="show"/>
<button v-on:click="show= !show">Remove</button>

</template>

<script>
import ChildUnmounted from './ChildUnmounted.vue';

export default {
    name: "UnmountedPhase",
    data() {
        return {
            show: true,
        }
    },
    components: {
        ChildUnmounted,
    }

}
</script>

<!-- when it is called
 whenever a component are removed from UI or DOM then they are called -->
 <!-- Where/why can this be used
  when we have to hide/remove something while clicking a button then insise the removed/hided components they are called
  to inhance the performance of a application -->

  <!-- beforeUnmouted
   -whenever you want to do operation s on your ui/html before remove components, it is called-->

   <!-- Unmouted
   -whenever you want to do operation s on your ui/html after remove components, it is called-->
  
   <!-- difference
   beforeUnmouted - Ui avilable, perform before component removed
   Unmouted - Ui not avilable, perform after component removed -->
