<template>
    <div class="container">
        <ul>
            <li>Opt 1</li>
            <li>Opt 2</li>
            <li>Opt 3</li>
            <li>Opt 4</li>
        </ul>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
ul{
    list-style: none;
    padding: 0;
}
li{
    background: white;
    width: 230px;
    border: 4px solid black;
    border-radius: 8px;
    margin-top: 8px;
    cursor: pointer;
}

li:hover{
    background: #969191;
}

</style>