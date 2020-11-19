import React, { Component } from 'react';
import axios from 'axios'

export class ProjectItem extends Component {
    state = {
        imgUrl: '',
    }
    

    componentDidMount(){
        const {featured_media} = this.props.project;
        const getImageUrl = axios.get(`http://localhost:8888/m12/landlines-wp/wp-json/wp/v2/media/${featured_media}`);


        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,   
            });
        });
    }
    render() {
        const { title, excerpt } = this.props.project;
        const { imgUrl } = this.state;

            return (
                <div>
                    <h2>{title.rendered}</h2>
                    <img src={imgUrl}></img>
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered}}></div>
                </div>
            );


    }
}

export default ProjectItem
