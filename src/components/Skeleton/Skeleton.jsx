import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={270}
        height={450}
        viewBox="0 0 270 450"
        backgroundColor="#e6e6e6"
        foregroundColor="#ededed"
        {...props}
    >
        <rect x="60" y="0" rx="0" ry="0" width="200" height="285" />
        <rect x="120" y="300" rx="0" ry="0" width="71" height="17" />
        <rect x="40" y="330" rx="0" ry="0" width="224" height="21" />
        <rect x="80" y="360" rx="0" ry="0" width="135" height="27" />
    </ContentLoader>
)

export default MyLoader