export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = Array(graph.length).fill(false);
    const prev = Array(graph.length).fill(-1);
    const queue = [source];
    
    do {
        const curr: number = queue.shift() as number;
        seen[curr] = true;
        
        if (curr === needle) {
            break;
        }

        const adj = graph[curr] as number[];
        for (let i = 0; i < adj.length; i++) {

            if (adj[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }

            prev[i] = curr;
            seen[i] = true;
            queue.push(i);

        }
    } while (queue.length);
    
    if (prev[needle] === -1) {
        return null;
    }

    let curr = needle;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}

