export class Utilities {
    
    static getItemByIndex<T>(arr: Array<T>, index: number): T | null {
        for (const key in arr) {
            if (key as unknown == index) {
                return arr[index];
            }
        }
        return null;
    }

    static getParentElement(ele: any, selector: string) {
        let maxSearch = 20;
        let searchedEle = 0;
        selector = selector.toLowerCase();
        while (ele && ele.parentNode) {
            let _ele = ele.parentNode.closest(selector) as HTMLElement;
            if (_ele) {
                return _ele;
            }
            searchedEle++;
            if (searchedEle >= maxSearch) {
                break;
            }
        }
        return null;
    }

    static updateObject(obj: { [x: string]: any; }, key: string, newVal: any) {
        for (var i in obj) {
            if (typeof obj[i] == 'object') {
                this.updateObject(obj[i], key, newVal);
            } else if (i === key) {
                obj[i] = newVal;
            }
        }
        return obj;
    }

    static getObject(theObject: any): any {
        var result = null;
        if (theObject instanceof Array) {
            for (var i = 0; i < theObject.length; i++) {
                result = this.getObject(theObject[i]);
                if (result) {
                    break;
                }
            }
        }
        else {
            for (var prop in theObject) {
                console.log(prop + ': ' + theObject[prop]);
                if (prop == 'id') {
                    if (theObject[prop] == 1) {
                        return theObject;
                    }
                }
                if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                    result = this.getObject(theObject[prop]);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    }
}