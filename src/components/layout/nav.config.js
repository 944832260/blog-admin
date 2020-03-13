const Navconfig = [
    {
        path:'/home',
        name:'首页',
    },
    {
        name:'一级目录',
        path:'yj',
        children:[
            {
                path:'/ace',
                name:'ACE'
            },
            {
                path:'/about',
                name:'ABOUT'
            }
        ]
    },
    {
        name:'二级目录',
        path:'ej',
        children:[
            {
                path:'/c',
                name:'C'
            },
            {
                path:'/d',
                name:'D'
            },
            {
                path:'/detail/c',
                name:'detail'
            }
        ]
    }
]


export default Navconfig;