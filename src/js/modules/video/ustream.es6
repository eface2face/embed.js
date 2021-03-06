import { getDimensions } from '../utils.es6'
import Base from '../base.es6'

export default class Ustream extends Base {
    constructor(input, output, options, embeds) {
        super(input, output, options, embeds);
        this.regex = /ustream.tv\/[a-z\/0-9]*/gi;
        this.service = 'ustream'
    }

    template(match) {
        let id = match.split('/');
        id.splice(1, 0, 'embed');
        const dimensions = getDimensions(this.options);
        return ejs.template.ustream(id, dimensions, this.options) || `<div class="ejs-embed ejs-ustream"><iframe src="//www.${id.join('/')}" height="${dimensions.height}" width="${dimensions.width}"></iframe></div>`
    }
}
