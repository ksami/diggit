"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    /**
     * Creates an instance of Store
     * @param {(a: T, b: T) => number} sortFn Sorting function to determine order between two items: negative for a before b and vice-versa, 0 for same ordering
     * @param {opts.boolean} [isAscending=true] Sort in ascending order
     * @memberof Store
     */
    constructor(sortFn, { isAscending = true }) {
        this._store = [];
        this._sortFn = isAscending ? sortFn : (a, b) => sortFn(b, a);
    }
    /**
     * Inserts an item at its sorted location in the store
     *
     * @param {T} item
     * @memberof Store
     */
    insert(item) {
        // find index i where item should be inserted at i
        let idx = this._store.findIndex(storeItem => this._sortFn(item, storeItem) <= 0);
        if (idx === -1) {
            this._store.push(item);
        }
        else {
            this._store.splice(idx, 0, item);
        }
    }
    /**
     * Gets a slice of items from the store
     *
     * @param {number} [start=0] Index to start extracting from (including)
     * @param {number} [end=this.length] Index to end extracting from (excluding)
     * @returns {T[]} Array of items with max length n
     * @memberof Store
     */
    getSlice(start = 0, end = this._store.length) {
        return this._store.slice(start, end);
    }
}
exports.default = Store;