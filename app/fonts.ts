import localFont from "next/font/local";

const futura = localFont({
	src: [
		{
			path: "../public/font/futura/FuturaNowHeadline.woff2",
			weight: "400",
			style: "normal"
		},
        {
            path: "../public/font/futura/FuturaNowHeadlineItalic.woff2",
            weight: "400",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineBlack.woff2",
            weight: "900",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineBlackItalic.woff2",
            weight: "900",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineBold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineBoldItalic.woff2",
            weight: "700",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineExtraBold.woff2",
            weight: "800",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineExtraBoldItalic.woff2",
            weight: "800",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineExtraLight.woff2",
            weight: "200",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineExtraLightItalic.woff2",
            weight: "200",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineLight.woff2",
            weight: "300",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineLightItalic.woff2",
            weight: "300",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineMedium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineMediumItalic.woff2",
            weight: "500",
            style: "italic"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineThin.woff2",
            weight: "100",
            style: "normal"
        },
        {
            path: "../public/font/futura/FuturaNowHeadlineThinItalic.woff2",
            weight: "100",
            style: "italic"
        },
	]
})
export { futura }