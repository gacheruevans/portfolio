export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'work',
            title:'work',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}