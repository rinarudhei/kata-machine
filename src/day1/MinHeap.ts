export default class MinHeap {
    public length: number;
    public data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number|undefined {
       if (this.length === 0) {
           return;
       }

       const out = this.data[0];

       this.length--;
       if (this.length === 0) {
           this.data = [];
           return out;
       }

       this.data[0] = this.data[this.length];
       this.heapifyDown(0);
       
       return out;
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }
        
        const parentIdx = this.getParent(idx);
        const parent = this.data[parentIdx];
        const curr = this.data[idx];

        if (parent > curr) {
            this.data[idx] = parent;
            this.data[parentIdx] = curr;
            this.heapifyUp(parentIdx);
        }

    }

    private heapifyDown(idx: number): void {
        const curr = this.data[idx];
        if (!curr || idx >= this.length) {
            return;
        }         

        const lChildIdx = this.getLChild(idx);
        const rChildIdx = this.getRChild(idx);

        if (lChildIdx >= this.length) {
            return;
        } 
        const lChild = this.data[lChildIdx];
        const rChild = this.data[rChildIdx];

        if (lChild < rChild && curr > lChild) {
            this.data[lChildIdx] = curr;
            this.data[idx] = lChild;
            return this.heapifyDown(lChildIdx);
        }
        if (rChild < lChild && curr > rChild) {
            this.data[rChildIdx] = curr;
            this.data[idx] = rChild;
            return this.heapifyDown(rChildIdx);
        }

        return;
    }

    private getParent(idx: number): number{
        return Math.floor((idx - 1) / 2);
    }

    private getLChild(idx: number): number {
        return 2 * idx + 1;
    }
    
    private getRChild(idx: number): number {
        return 2 * idx + 2;
    }
}
