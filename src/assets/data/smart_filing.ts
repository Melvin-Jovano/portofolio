const smartFilingWidget = {
    id: 'smart-filing',
    position: [
        'Software Engineer',
    ],
    technology: [
        'ReactJS',
        'ASP.NET Core MVC', 
        'OpenText Content Server'
    ],
    title: 'Smart Filing Widget',
    description: `An advanced file management solution designed for seamless file uploads via a dashboard widget, utilizing drag-and-drop functionality. This application empowers users with three distinct filing features:

<ul style="margin:10px,10px">
    <li>Assist Filing: Uploads files into predefined folders based on rules created by an admin, ensuring proper categorization.</li>
    <li>Rules-Based Filing: Allows users to create and apply their own filing rules, directing uploads to the appropriate folders automatically..</li>
    <li>Advanced Filing: Leverages AI-driven recommendations to suggest the best folder for file uploads, enhancing accuracy and efficiency.</li>
</ul>

The system also includes comprehensive metadata editing capabilities, enabling users to modify file details directly from the dashboard for better organization and searchability.`,
    carousel: [
        {
            url: './img/rbac/system-admin-dashboard.png',
            alt: 'System Admin Dashboard',
            type: 'landscape'
        },
        {
            url: './img/rbac/agency-admin-dashboard.png',
            alt: 'Agency Admin Dashboard',
            type: 'landscape'
        },
        {
            url: './img/rbac/new-agency.png',
            alt: 'New Agency',
            type: 'landscape'
        },
        {
            url: './img/rbac/agencies.png',
            alt: 'Agencies',
            type: 'landscape'
        },
        {
            url: './img/rbac/epfile.png',
            alt: 'EPFiles Configuration',
            type: 'landscape'
        },
        {
            url: './img/rbac/users.png',
            alt: 'Users',
            type: 'landscape'
        }
    ]
}

export default smartFilingWidget;