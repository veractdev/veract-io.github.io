/** @type {import('next').NextConfig} */
const nextConfig = {
    // Transpile react-easy-swipe
    transpileModules: ['react-easy-swipe'],
}

module.exports = {
    output: 'export',
        images: {
            disableStaticImages: true,
             unoptimized: true ,
          },
    
}
