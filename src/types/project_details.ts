interface ImageInfo {
    loc: string;
    alt: string;  //Alternative title when image is not available
}

export interface ProjectDetails {
    url: string;
    title: string;
    desc: string;
    img: ImageInfo;
    technologies_used: Array<string>;
}