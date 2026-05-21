/**
 * Sales Representatives Database
 * Created on: 2025-01-17
 */

const SALES_REPS_DB = [
    {
        id: "dypark",
        name: "박다연",
        position: "대리",
        dept: "Sales Team",
        email: "dypark@ase-semi.com",
        tel: "031-329-0061",
        hp: "010-7274-2617",
        fax: "031-329-0001"
    },
    {
        id: "yjhan",
        name: "한예진",
        position: "사원",
        dept: "Sales Team",
        email: "yjhan@ase-semi.com",
        tel: "031-329-0022",
        hp: "010-9314-4181",
        fax: "031-329-0001"
    },
    {
        id: "sjlee",
        name: "이수정",
        position: "사원",
        dept: "Sales Team",
        email: "soojung.lee@ase-semi.com",
        tel: "031-329-0061",
        hp: "010-4179-9597",
        fax: "031-329-0001"
    },
    {
        id: "jycho",
        name: "조재영",
        position: "대리",
        dept: "Sales Team",
        email: "jycho@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-4968-3178",
        fax: "031-329-0001"
    },
    {
        id: "jwlee",
        name: "이종욱",
        position: "차장",
        dept: "Sales Team",
        email: "jwlee@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-8314-4138",
        fax: "031-329-0001"
    },
    {
        id: "kmlim",
        name: "임경민",
        position: "대리",
        dept: "Sales Team",
        email: "kmlim@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-2381-2508",
        fax: "031-329-0001"
    },
    {
        id: "hdshin",
        name: "신현덕",
        position: "이사",
        dept: "Sales Team",
        email: "hdshin@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-9848-2330",
        fax: "031-329-0001"
    },
    {
        id: "tjben",
        name: "변태준",
        position: "상무",
        dept: "Sales Team",
        email: "tjben@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-2376-3891",
        fax: "031-329-0001"
    },

    {
        id: "dypark_en",
        name: "Dayeon Park",
        position: "",
        dept: "Sales Team",
        email: "dypark@ase-semi.com",
        tel: "031-329-0061",
        hp: "010-7274-2617",
        fax: "031-329-0001"
    },
    {
        id: "yjhan_en",
        name: "Yejin Han",
        position: "",
        dept: "Sales Team",
        email: "yjhan@ase-semi.com",
        tel: "031-329-0022",
        hp: "010-9314-4181",
        fax: "031-329-0001"
    },
    {
        id: "sjlee_en",
        name: "Sujung Lee",
        position: "",
        dept: "Sales Team",
        email: "soojung.lee@ase-semi.com",
        tel: "031-329-0061",
        hp: "010-4179-9597",
        fax: "031-329-0001"
    },
    {
        id: "jycho_en",
        name: "Jonathan",
        position: "",
        dept: "Sales Team",
        email: "jycho@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-4968-3178",
        fax: "031-329-0001"
    },
    {
        id: "jwlee_en",
        name: "John Lee",
        position: "",
        dept: "Sales Team",
        email: "jwlee@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-8314-4138",
        fax: "031-329-0001"
    },
    {
        id: "kmlim_en",
        name: "Kyungmin Lim",
        position: "",
        dept: "Sales Team",
        email: "kmlim@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-2381-2508",
        fax: "031-329-0001"
    },
    {
        id: "hdshin_en",
        name: "HD Shin",
        position: "",
        dept: "Sales Team",
        email: "hdshin@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-9848-2330",
        fax: "031-329-0001"
    },
    {
        id: "tjben_en",
        name: "TJ Ben",
        position: "",
        dept: "Sales Team",
        email: "tjben@ase-semi.com",
        tel: "031-329-0000", // 대표 번호 (Direct Missing)
        hp: "010-2376-3891",
        fax: "031-329-0001"
    }
];

// Helper to find rep by ID or Name
function findSalesRep(keyword) {
    return SALES_REPS_DB.find(rep => 
        rep.name.includes(keyword) || rep.id === keyword
    );
}
