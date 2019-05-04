export default function() {
  return [
    {
      title: "All Users",
      to: "/all-users",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    // {
    //   title: "Projects",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/all-projects",
    // },
    // {
    //   title: "Add New Project",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-project",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    {
      title: "Posts",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/profile",
    },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
