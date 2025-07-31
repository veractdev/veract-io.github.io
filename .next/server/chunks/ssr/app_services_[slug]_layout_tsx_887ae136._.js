module.exports = {

"[project]/app/services/[slug]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ServicesLayout),
    "generateMetadata": (()=>generateMetadata)
});
async function generateMetadata({ params }) {
    const { slug } = await params;
    return {
        title: slug,
        description: 'Services',
        openGraph: {
            title: slug,
            description: 'Services',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: slug,
            description: 'Services'
        }
    };
}
function ServicesLayout({ children }) {
    return children;
}
}}),

};

//# sourceMappingURL=app_services_%5Bslug%5D_layout_tsx_887ae136._.js.map