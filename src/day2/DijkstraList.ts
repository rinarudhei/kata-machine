function hasUnvisited(seen: boolean[]) {
    return seen.some(s => !s);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen: boolean[] = Array(arr.length).fill(false);
    const prev: number[] = Array(arr.length).fill(-1);
    const dists: number[] = Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while(hasUnvisited(seen)) {
        const lo = getLowestUnvisited(seen, dists);
        seen[lo] = true;

        const vertices = arr[lo];
        for (let i = 0; i < vertices.length; i++) {
            const vertice = vertices[i];
            if (seen[vertice.to]) {
                continue;
            }

            const dist = dists[lo] + vertice.weight;

            if (dists[vertice.to] > dist) {
                dists[vertice.to] = dist;
                prev[vertice.to] = lo;
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse(); 
}
