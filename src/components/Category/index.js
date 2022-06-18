import React from 'react'
import { Link } from 'wouter'

import './Category.css'

export default function Category({ name, options = [], ...props }) {

    return <div>
        <h3 className="Category-title">{name}</h3>

        <div className="Category-list">
            {options.map((singleOption, idx) => {
                let modifier = 0;
                idx%2 === 0 ? modifier = 0 : modifier = 1;
                if(idx%3 === 0) modifier = 2;
                return <div key={singleOption} className={`Category-item-${modifier}`}>
                    <Link
                        className="Category-link"
                        to={`/search/${singleOption}`}
                    >
                        {singleOption}
                    </Link>
                </div>
    })}
        </div>

    </div>
}
