type BinaryNode<T> = {
    value: number,
    left: BinaryNode<T>|null,
    right: BinaryNode<T>|null,
}
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    while (q.length) {
        const next = q.shift() as BinaryNode<number>;

        if (next.value === needle) {
            return true;
        }
        if (next.left) {
            q.push(next.left);
        }
        if (next.right) {
            q.push(next.right);
        }
    }

    return false;
}
