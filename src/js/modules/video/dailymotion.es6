import { getDimensions } from '../utils.es6'
import Base from '../base.es6'

export default class Dailymotion extends Base {
    constructor(input, output, options, embeds) {
        super(input, output, options, embeds);
        this.regex = /dailymotion.com\/video\/[a-zA-Z0-9-_]+/gi;
        this.service = 'dailymotion'
    }

    template(match) {
        const dimensions = getDimensions(this.options);
        const a = match.split('/');
        const id = a[a.length - 1]
        return ejs.template.dailymotion(id, dimensions, this.options) || `<div class="ejs-video ejs-embed">
		<iframe src="http://www.dailymotion.com/embed/video/${id}" height="${dimensions.height}" width="${dimensions.width}"></iframe>
		</div>`
    }
}

