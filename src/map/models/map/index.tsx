import React from 'react'
import { useTranslation } from "react-i18next";
import {
	BatkenMapSvg,
	ChuyMapSvg,
	OshMapSvg,
	JalalAbadMapSvg,
	YsykKolMapSvg,
	TalasMapSvg,
	NarynMapSvg
} from "src/map/statics";
import styles from "./map.module.scss";

interface KgMapProps {
	selected: number;
	setSelected: (p: number) => void;
}

interface MapTitleProps {
	isSelected: boolean;
	top: string;
	left: string;
	title: string;
	onClick: () => void;
}

export const KgMap = ({ selected, setSelected }: KgMapProps) => {
	const { t } = useTranslation();
	const selectedBg = "#0B1F7C"
	const unSelectedBg = "#fff"
	const selectedOpacity = 0.5
	const unSelectedOpacity = 1

	return (
		<div className={styles.kg_map}>
			<MapTitle
				isSelected={selected === 2}
				top={"60px"}
				left={"150px"}
				title={t("regions.talas")}
				onClick={() => setSelected(2)}
			/>
			<TalasMapSvg
				fill={selected === 2 ? selectedBg : unSelectedBg}
				opacity={selected === 2 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(2)}
				styles={{
					position: "absolute",
					top: "47px",
					left: "130px",
					cursor: "pointer",
				}}
			/>
			<MapTitle
				isSelected={selected === 0}
				top={"40px"}
				left={"350px"}
				title={t("regions.chuy")}
				onClick={() => setSelected(0)}
			/>
			<ChuyMapSvg
				fill={selected === 0 ? selectedBg : unSelectedBg}
				opacity={selected === 0 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(0)}
				styles={{
					cursor: "pointer",
					position: 'absolute',
					top: "0",
					left: '308px'
				}}
			/>
			<MapTitle
				isSelected={selected === 6}
				top={"80px"}
				left={"630px"}
				title={t("regions.ysyk-kol")}
				onClick={() => setSelected(6)}
			/>
			<YsykKolMapSvg
				fill={selected === 6 ? selectedBg : unSelectedBg}
				opacity={selected === 6 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(6)}
				styles={{
					position: "absolute",
					top: "37px",
					left: "514px",
					cursor: "pointer",
				}}
			/>
			<MapTitle
				isSelected={selected === 3}
				top={"150px"}
				left={"190px"}
				title={t("regions.jalal-abad")}
				onClick={() => setSelected(3)}
			/>
			<JalalAbadMapSvg
				fill={selected === 3 ? selectedBg : unSelectedBg}
				opacity={selected === 3 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(3)}
				styles={{
					position: "absolute",
					top: "115px",
					left: "73px",
					cursor: "pointer",
				}}
			/>
			<MapTitle
				isSelected={selected === 1}
				top={"180px"}
				left={"450px"}
				title={t("regions.naryn")}
				onClick={() => setSelected(1)}
			/>
			<NarynMapSvg
				fill={selected === 1 ? selectedBg : unSelectedBg}
				opacity={selected === 1 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(1)}
				styles={{
					position: "absolute",
					top: "87px",
					left: "360px",
					cursor: "pointer",
				}}
			/>
			<MapTitle
				isSelected={selected === 5}
				top={"340px"}
				left={"90px"}
				title={t("regions.batken")}
				onClick={() => setSelected(5)}
			/>
			<BatkenMapSvg
				fill={selected === 5 ? selectedBg : unSelectedBg}
				opacity={selected === 5 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(5)}
				styles={{
					position: "absolute",
					top: "317px",
					left: "-1px",
					cursor: "pointer",
				}}
			/>
			<MapTitle
				isSelected={selected === 4}
				top={"290px"}
				left={"270px"}
				title={t("regions.osh")}
				onClick={() => setSelected(4)}
			/>
			<OshMapSvg
				fill={selected === 4 ? selectedBg : unSelectedBg}
				opacity={selected === 4 ? selectedOpacity : unSelectedOpacity}
				onClick={() => setSelected(4)}
				styles={{
					position: "absolute",
					top: "230px",
					left: "181px",
					cursor: "pointer",
				}}
			/>
		</div>
	);
};

const MapTitle = ({ isSelected, top, left, title, onClick }: MapTitleProps) => {
	return (
		<div
			onClick={onClick}
			style={{
				position: "absolute",
				display: "flex",
				alignItems: "center",
				justifyContent: "cente",
				flexDirection: "column",
				top: top,
				left: left,
				zIndex: 5,
				cursor: "pointer",
			}}>
			<div
				className={styles.map_title_icon}
				style={{
					transform: isSelected ? "scale(1.1)" : "scale(1)",
					background: "none",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center"
				}}>
				<div className={styles.map_title_icon_dot} style={{ background: "#0A164F" }}></div>
			</div>
			<p
				style={{
					width: '130px',
					maxWidth: "150px",
					lineHeight: '17px',
					fontSize: "17px",
					fontWeight: "500",
					textAlign: "center",
					color: isSelected ? "green" : "",
					transform: isSelected ? "scale(1.2)" : "scale(1)",
					transition: "300ms",
				}}>
				{title}
			</p>
		</div>
	);
};
