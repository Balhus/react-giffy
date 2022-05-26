import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen'
import ContentLoader from "react-content-loader"

//React lazy nos sirve para cargar un componente dinamicamente, 
//así que el navegador no carga el JS hasta llegar al punto en el que deja de estar suspendido
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={700}
        height={150}
        viewBox="0 0 750 150"
        backgroundColor="#000000"
        foregroundColor="#8f8f8f"
        {...props}
    >
        <rect x="126" y="67" rx="5" ry="5" width="80" height="10" />
        <rect x="222" y="67" rx="5" ry="5" width="60" height="10" />
        <rect x="139" y="102" rx="5" ry="5" width="100" height="10" />
        <rect x="253" y="101" rx="5" ry="5" width="45" height="10" />
        <rect x="299" y="67" rx="5" ry="5" width="85" height="10" />
        <rect x="310" y="102" rx="5" ry="5" width="58" height="10" />
        <rect x="154" y="131" rx="5" ry="5" width="50" height="10" />
        <rect x="217" y="131" rx="5" ry="5" width="85" height="10" />
        <rect x="315" y="131" rx="5" ry="5" width="45" height="10" />
        <rect x="104" y="19" rx="5" ry="5" width="300" height="22" />
    </ContentLoader>
)

export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

    return <div className="TrendingSearches" ref={fromRef}>
        {/* Como es una promise el React.lazy, es necesario el Suspense, que lo que hace es como resolver esa promise y importar ejecutar lo que este en el lazy 
        El fallback es lo que sale mientras esta resolviendo*/}
        <Suspense fallback={<MyLoader />} >
            {isNearScreen && <TrendingSearches /> }
        </Suspense>
    </div>
}