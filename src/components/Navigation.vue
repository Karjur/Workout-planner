<template>
    <header>
        <nav class="h-16">
            <p>Sportlyz</p>
                <ul class="navigation" sm:justify-start>
                    <li><router-link aria-current="page" class="link" :to="{name: 'Avaleht'}">Avaleht</router-link></li>
                    <li><router-link aria-current="page" class="link" to="/profile-sportsman">Profiil</router-link></li>
                    <li><router-link aria-current="page" class="link" :to="{name: 'Trennid'}">Treeningud</router-link></li>
                    <li><router-link aria-current="page" class="link" :to="{name: 'Grupid'}">Treeninggrupid</router-link></li>
                    <li><router-link aria-current="page" class="link" :to="{name: 'Lisa grupp'}">Lisa treeninggrupp</router-link></li>
                </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "navigation",
    };
</script>

<style lang="scss" scoped>
    header {
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99;
        width: 100%;
        transition: .5s ease all;
        color: #fff;
    }

    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;

        p {
            font-size: 20px;
            text-transform: uppercase;
            align-items: center;
            text-align: left;
        }

        ul,
        .link {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 16px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #00afea;
                border-color: #00afea;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }
    }
</style>