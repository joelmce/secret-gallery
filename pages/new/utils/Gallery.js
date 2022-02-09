/**
 * TODO @joelmce 
 * 1. Better variable naming
 * 2. Increase effiency when app requests a find
 * 3. Eventually connect this to a proper backend DB. For
 *    now everything is frontend (testing purposes)
 * 
 * Edit and deleting will be a feature but low priority
 */

let galleries = [
    {id, alias}
]

/**
 * @param {*} selected Type of NFT gallery selected
 * @param {string} custom Allows user to create title for gallery
 * @param {boolean} alias OPTIONAL, showcase username instead of wallet address
 */
export function Gallery(selected, custom, alias) {
    this.selected = selected
    this.custom = custom
    this.alias = alias
}

const custom = () => this.custom;
const selected = () => this.selected;
const alias = () => this.alias;
const setAlias = (_alias) => {this.alias = _alias};
const setCustom = (_custom) => {this.custom = _custom};

const save = () => {
    galleries.id = custom()
    galleries.alias = alias()
    return true 
}

/**
 * 
 * @param {string} _id UNIQUE: Name of the gallery
 * @returns {string} owner of gallery
 */
function find(_id) {
    for(var i = 0; i < galleries.length; i += 1) {
        if(galleries[i].id == _id) {
            return galleries[i].owner // We can shorthand this soon
        } 
    }
}
