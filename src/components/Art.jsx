/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import '../resource/css/art.css';
import Arts from '../art.json';
function Art() {
    return (
        <>
            <div>
                <div className="gallery art_container_column">
                    {
                        Arts.map(art => {
                            return <div className=" gallery__column" key={art.id}>
                                <a className="gallery__link">
                                    <figure className="gallery__thumb">
                                        <img loading="lazy" src={art.icon} alt="Portrait" height={art.height} className="gallery__image" />
                                        <figcaption className="gallery__caption">Portrait by {art.name}</figcaption>
                                    </figure>
                                </a>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    );
}
export default Art