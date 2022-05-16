import React from "react";
import "./Gif.css"
import GifDetail from '/GifDetail'
import { Link, Route } from 'wouter';

export default function Gif({ title, id, url }) {
  return (
    <div>
      <Link to={`#${id}`} className="Gif">
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
      <Route path='/#' component={GifDetail} />
    </div>
  );
}