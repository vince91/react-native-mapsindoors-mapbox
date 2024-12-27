"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPLabelGraphic {
    constructor(backgroundImage, stretchX, stretchY, content) {
        this.backgroundImage = backgroundImage;
        this.stretchX = stretchX;
        this.stretchY = stretchY;
        this.content = content;
    }
    static create(object) {
        return new MPLabelGraphic(object.backgroundImage, object.stretchX, object.stretchY, object.content);
    }
}
exports.default = MPLabelGraphic;
//# sourceMappingURL=MPLabelGraphic.js.map