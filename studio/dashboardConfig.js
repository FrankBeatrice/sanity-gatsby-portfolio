export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d375eebd8388d85f8ae382c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j88upy3q',
                  apiId: '352658f1-7c82-4e2d-b460-33be742ec503'
                },
                {
                  buildHookId: '5d375eec501a9982ce4f96dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6bcgdj4y',
                  apiId: '7a63e188-166c-42f9-a873-01225a512ae3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FrankBeatrice/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6bcgdj4y.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
