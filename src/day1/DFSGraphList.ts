function search(graph: WeightedAdjacencyList, needle: number, path: number[], seen: boolean[], curr: number) {
    seen[curr] = true;
    path.push(curr);

    if (curr === needle) {
        return;
    }
    
    let seenCount = 0;
    for (let i = 0; i < graph[curr].length; i++) {
        const next = graph[curr][i].to;
        if (!seen[next]) {
            search(graph, needle, path, seen, next);
        } else {
            seenCount++;
        } 
    }

    if (seenCount === graph[curr].length || graph[curr].length === 0) {
        path.pop();
    }
    
    return;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen = Array(graph.length).fill(false);
    const path = [] as number[];
    search(graph, needle, path, seen, source);

    if (path[path.length - 1] !== needle) {
        return null;
    }
    return path;
}
