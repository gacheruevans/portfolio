export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
        {
            name:'startyear',
            title:'Start Year',
            type:'string'
        },
        {
            name:'endyear',
            title:'End Year',
            type:'string'
        },
        {
            name:'role',
            title:'Role',
            type:'string'
        },
        {
            name:'desc',
            title:'Description',
            type:'string'
        },
        {
            name: 'skills',
            title: 'Skills',
            type:'array',
            of: [
                { type:'skills'}
            ]
        }
    ]
}