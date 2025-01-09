<template>
<h1>Slots</h1>
<NamedSlot>
    <template v-slot:header>
        <h1>Header</h1>
    </template>
    <template v-slot:main>
        <h1>Content</h1>
    </template>
    <template v-slot:footer>
        <button>Click Here</button>
    </template>
</NamedSlot>
<NamedSlot>
    <template v-slot:header>
        <h1>Header</h1>
    </template>
    <template v-slot:main>
        <h1>Content</h1>
    </template>
    <template v-slot:footer>
        <button>Submit</button>
    </template>
</NamedSlot>
<!-- <ChildSlot><h1>Hello form parent slot in child</h1></ChildSlot> -->
<!-- <ChildSlot><h2>{{ 10+10 }}</h2></ChildSlot> -->
<!-- <ChildSlot><h2><a href="https://i.pinimg.com/736x/d0/05/3e/d0053ea8a3b8c142b5f2775eb55f903f.jpg">Click Here</a></h2></ChildSlot> -->
<!-- <ChildSlot><img src="https://i.pinimg.com/1200x/7c/dc/b2/7cdcb22d0c6b40e5e7022e21c34af9c1.jpg" alt=""></ChildSlot> -->
</template>

<script>
import NamedSlot from './namedSlot.vue';

// import ChildSlot from './childSlot.vue';

export default {
    name: 'UseofSlots',
    components: {
        // ChildSlot,
        NamedSlot,
    }
}
</script>
