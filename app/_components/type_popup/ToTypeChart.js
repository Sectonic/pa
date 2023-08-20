"use client";

const { useRouter } = require("next/navigation");

const ToTypeChart = ({ type }) => {
    const router = useRouter();
    return (
        <div className="animals_analysis" onClick={() => router.push('/apps/typechart?' + new URLSearchParams({ type }))}>
            <img src="/img/main/type_tool.png" />
            TypeChart
        </div>
    )
}

export default ToTypeChart;