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
                  buildHookId: '6224f633d049c21f4f106b1e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sysh1w39',
                  apiId: 'ae9dfa1f-f485-40c7-a143-7976f8146fe9'
                },
                {
                  buildHookId: '6224f6344fb3d7c49e1bdf45',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mm2p64wk',
                  apiId: '1c71738d-ea22-4333-a0a9-264a8c309175'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmoralest10/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mm2p64wk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
