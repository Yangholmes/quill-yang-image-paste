/**
 * Quill editor 插件, 用于剪贴板图片粘贴
 *
 * @file
 * @author Yangholmes 2018-01-24
 */
export default class ImagePaste {
    constructor(quill, options = {}) {
        this.quill = quill;
        this.eventRegister();
    }

    // 事件注册
    eventRegister() {
        this.handlePaste = this.handlePaste.bind(this);
        this.quill.root.addEventListener('paste', this.handlePaste);
    }

    // paste事件处理
    handlePaste(evt) {
        this.insert = this.insert.bind(this);
        let clipboardData = evt.clipboardData || evt.originalEvent.clipboardData;
        if (clipboardData && clipboardData.items) {
            let items = clipboardData.items;
            this.readFiles(items, this.insert);
        }
    }

    // 从clipboardData中读取图片base64数据
    readFiles(items, callback) {
        [].forEach.call(items, item => {
            if (item.kind === 'file'
                && item.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)) {
                let blob = item.getAsFile();
                let reader = new FileReader();
                reader.onload = function (evt) {
                    callback && callback(evt.target.result);
                }; // data url!
                reader.readAsDataURL(blob);
            }
        });
    }

    // 将base64数据装饰成<img>标签插入quill中
    insert(base64 = '') {
        let selection = this.quill.getSelection(); // null may be returned if editor does not have focus
        let index = (this.quill.getSelection() || {}).index || this.quill.getLength();
        if (selection) {
            // we must be in a browser that supports pasting (like Firefox)
            // so it has already been placed into the editor
        }
        else {
            // otherwise we wait until after the paste when this.quill.getSelection()
            // will return a valid index
            setTimeout(function () {
                this.quill.insertEmbed(index, 'image', base64, 'user');
            }.bind(this), 0);
        }
    }
}

// if (window.Quill) {
//     window.Quill.register('modules/imagePaste', ImagePaste);
// }
