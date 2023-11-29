import { useState } from 'react'
import {KgMap} from "src/map/models/map";

export const MapKg = () => {
    const [selected, setSelected] = useState(0)
    return <KgMap selected={selected} setSelected={setSelected} />
}
