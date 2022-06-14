// Import all components here
// import React, { Component } from 'react'
import Dashboard from './HRMS/Dashboard/Dashboard';
import Users from './HRMS/Users/Users';
import Departments from './HRMS/Departments/Departments';
import Employee from './HRMS/Employee/Employee';
import Holidays from './HRMS/Holidays/Holidays';
import Events from './HRMS/Events/Events';
import Activities from './HRMS/Activities/Activities';
import Payroll from './HRMS/Payroll/Payroll';
import Report from './HRMS/Report/Report';
import Accounts from './HRMS/Accounts/Accounts';
import ProjectDashboard from './Project/Dashboard/Dashboard';
import ProjectList from './Project/ProjectList/Projectlist';
import Taskboard from './Project/Taskboard/Taskboard';
import TicketList from './Project/TicketList/TicketList';
import TicketDetails from './Project/TicketDetails/TicketDetails';
import Clients from './Project/Clients/Clients';
import TodoList from './Project/TodoList/TodoList';
import JobPortalDashboard from './JobPortal/Dashboard/Dashboard';
import Applicants from './JobPortal/Applicants/Applicants';
import Positions from './JobPortal/Positions/Positions';
import Resumes from './JobPortal/Resumes/Resumes';
import Settings from './JobPortal/Settings/Settings';
import Icons from './Icons/icons';
import IconsFeather from './Icons/IconsFeather';
import IconsLine from './Icons/IconsLine';
import IconsFlags from './Icons/IconsFlags';
import IconsPayments from './Icons/IconsPayments';
import Charts from './Charts/Charts';
import ChartsE from './Charts/ChartsE';
import ChartsC3 from './Charts/ChartsC3';
import ChartsKnob from './Charts/ChartsKnob';
import ChartsSparkline from './Charts/ChartsSparkline';
import Forms from './Forms/Forms';
import FormAdvanced from './Forms/FormAdvanced';
import FormValidation from './Forms/FormValidation';
import FormWizard from './Forms/FormWizard';
import FormSummernote from './Forms/FormSummernote';
import Tables from './Tables/Tables';
import DataTables from './Tables/DataTables';
import TablesColor from './Tables/TablesColor';
import TablesBasic from './Tables/TablesBasic';
import Widgets from './Widgets/Widgets';
import WCard from './Widgets/WCard';
import WStatistics from './Widgets/WStatistics';
import WData from './Widgets/WData';
import WSocial from './Widgets/WSocial';
import WOther from './Widgets/WOther';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import AppCalendar from './AppPages/AppCalendar';
import AppContact from './AppPages/AppContact';
import AppChart from './AppPages/AppChart';
import AppFilemanager from './AppPages/AppFilemanager';
import AppSetting from './AppPages/AppSetting';
import Maps from './Maps/Maps';
import Gallery from './Gallery/Gallery';
import Login from './Authentication/login';
import Signup from './Authentication/signup';
import ForgotPassword from './Authentication/forgotpassword';
import NotFound from './Authentication/404';
import InternalServer from './Authentication/500';
import TerritoireDibaya from './KasaiCentral/TerritoireDibaya';
import TerritoireDemba from './KasaiCentral/TerritoireDemba';
import TerritoireKazumba from './KasaiCentral/TerritoireKazumba';
import TerritoireLuiza from './KasaiCentral/TerritoireLuiza';
import TerritoireDimbelenge from './KasaiCentral/TerritoireDimbelenge';
import TerritoireLuebo from './Kasai/TerritoireLuebo';
import TerritoireTshikapa from './Kasai/TerritoireTshikapa';
import TerritoireIlebo from './Kasai/TerritoireIlebo';
import TerritoireMweka from './Kasai/TerritoireMweka';
import TerritoireDekese from './Kasai/TerritoireDekese';
import TerritoireMiabi from './KasaiOriental/TerritoireMiabi';
import TerritoireKabeyaKamwanga from './KasaiOriental/TerritoireKabeyaKamwanga';
import TerritoireLupatapata from './KasaiOriental/TerritoireLupatapata';
import TerritoireKatanda from './KasaiOriental/TerritoireKatanda';
import TerritoireTshilenge from './KasaiOriental/TerritoireTshilenge';
import TerritoireLuilu from './Lomami/TerritoireLuilu';
import TerritoireKamiji from './Lomami/TerritoireKamiji';
import TerritoireNgandajika from './Lomami/TerritoireNgandajika';
import TerritoireKabinda from './Lomami/TerritoireKabinda';
import TerritoireLubao from './Lomami/TerritoireLubao';
import TerritoireMweneDitu from './Lomami/TerritoireMweneDitu';
import TerritoireNyiragongo from './NordKivu/TerritoireNyiragongo';
import TerritoireBeni from './NordKivu/TerritoireBeni';
import TerritoireLubero from './NordKivu/TerritoireLubero';
import TerritoireMasisi from './NordKivu/TerritoireMasisi';
import TerritoireRutshuru from './NordKivu/TerritoireRutshuru';
import TerritoireWalikale from './NordKivu/TerritoireWalikale';
import TerritoireIrumu from './Ituri/TerritoireIrumu';
import TerritoireMambasa from './Ituri/TerritoireMambasa';
import TerritoireDjugu from './Ituri/TerritoireDjugu';
import TerritoireMahagi from './Ituri/TerritoireMahagi';
import TerritoireAru from './Ituri/TerritoireAru';
import TerritoireFizi from './SudKivu/TerritoireFizi';
import TerritoireKabare from './SudKivu/TerritoireKabare';
import TerritoireKelehe from './SudKivu/TerritoireKelehe';
import TerritoireMwenga from './SudKivu/TerritoireMwenga';
import TerritoireShabunda from './SudKivu/TerritoireShabunda';
import TerritoireUvira from './SudKivu/TerritoireUvira';
import TerritoireWalungu from './SudKivu/TerritoireWalungu';
import TerritoireKabongo from './HautLomami/TerritoireKabongo';
import TerritoireBukama from './HautLomami/TerritoireBukama';
import TerritoireMalembaNkulu from './HautLomami/TerritoireMalembaNkulu';
import TerritoireKaniama from './HautLomami/TerritoireKaniama';
import TerritoireKamina from './HautLomami/TerritoireKamina';
import TerritoireKapanga from './Lualaba/TerritoireKapanga';
import TerritoireSandoa from './Lualaba/TerritoireSandoa';
import TerritoireDilolo from './Lualaba/TerritoireDilolo';
import TerritoireLubudi from './Lualaba/TerritoireLubudi';
import TerritoireMutshatsha from './Lualaba/TerritoireMutshatsha';
import TerritoireKambove from './HautKatanga/TerritoireKambove';
import TerritoirePweto from './HautKatanga/TerritoirePweto';
import TerritoireMitwaba from './HautKatanga/TerritoireMitwaba';
import TerritoireKasenga from './HautKatanga/TerritoireKasenga';
import TerritoireSakania from './HautKatanga/TerritoireSakania';
import TerritoireKipushi from './HautKatanga/TerritoireKipushi';

const Routes = [
    {
        path: "/",
        name: 'Accueil',
        exact: true,
        pageTitle: "Carte interactive des activités",
        component: Report
    },
    {
        path: "/hr-users",
        name: 'hr-users',
        exact: true,
        pageTitle: "Utilisateurs",
        component: Users
    },
    {
        path: "/hr-partnaire",
        name: 'department',
        exact: true,
        pageTitle: "Centre partenaire",
        component: Departments
    },
    {
        path: "/hr-assure",
        name: 'employee',
        exact: true,
        pageTitle: "Statut",
        component: Employee
    },
    {
        path: "/hr-activities",
        name: 'activities',
        exact: true,
        pageTitle: "Activities",
        component: Activities
    },
    {
        path: "/hr-holidays",
        name: 'holidays',
        exact: true,
        pageTitle: "Holidays",
        component: Holidays
    },
    {
        path: "/hr-events",
        name: 'events',
        exact: true,
        pageTitle: "Events",
        component: Events
    },
    {
        path: "/hr-payroll",
        name: 'payroll',
        exact: true,
        pageTitle: "Payroll",
        component: Payroll
    },
    {
        path: "/hr-accounts",
        name: 'accounts',
        exact: true,
        pageTitle: "Accounts",
        component: Accounts
    },
    {
        path: "/hr-report",
        name: 'report',
        exact: true,
        pageTitle: "Report",
        component: Report
    },
    // add new routes here

    //project

    {
        path: "/project-dashboard",
        name: 'projectDashboard',
        exact: true,
        pageTitle: "'Project Dashboard",
        component: ProjectDashboard
    },
    {
        path: "/project-list",
        name: 'project-list',
        exact: true,
        pageTitle: "Project",
        component: ProjectList
    },

    {
        path: "/project-taskboard",
        name: 'project-taskboard',
        exact: true,
        pageTitle: "Taskboard",
        component: Taskboard
    },

    {
        path: "/project-ticket",
        name: 'project-ticket',
        exact: true,
        pageTitle: "Ticket List",
        component: TicketList
    },

    {
        path: "/project-ticket-details",
        name: 'project-ticket-details',
        exact: true,
        pageTitle: "Ticket Details",
        component: TicketDetails
    },
    {
        path: "/project-clients",
        name: 'project-clients',
        exact: true,
        pageTitle: "Clients",
        component: Clients
    },

    {
        path: "/project-todo",
        name: 'project-todo',
        exact: true,
        pageTitle: "Todo List",
        component: TodoList
    },

    //job portal

    {
        path: "/jobportal-dashboard",
        name: 'jobportalDashboard',
        exact: true,
        pageTitle: "Job Dashboard",
        component: JobPortalDashboard
    },
    {
        path: "/jobportal-positions",
        name: 'jobportalPositions',
        exact: true,
        pageTitle: "Job Positions",
        component: Positions
    },
    {
        path: "/jobportal-applicants",
        name: 'jobportalpplicants',
        exact: true,
        pageTitle: "Job Applicants",
        component: Applicants
    },
    {
        path: "/jobportal-resumes",
        name: 'jobportalResumes',
        exact: true,
        pageTitle: "Job Resumes",
        component: Resumes
    },
    {
        path: "/jobportal-settings",
        name: 'jobportalSettings',
        exact: true,
        pageTitle: "Job Settings",
        component: Settings
    },


    {
        path: "/login",
        name: 'login',
        exact: true,
        pageTitle: "Tables",
        component: Login
    },
    {
        path: "/signup",
        name: 'signup',
        exact: true,
        pageTitle: "Tables",
        component: Signup
    },
    {
        path: "/forgotpassword",
        name: 'forgotpassword',
        exact: true,
        pageTitle: "Tables",
        component: ForgotPassword
    },
    {
        path: "/notfound",
        name: 'notfound',
        exact: true,
        pageTitle: "Tables",
        component: NotFound
    },
    {
        path: "/internalserver",
        name: 'internalserver',
        exact: true,
        pageTitle: "Tables",
        component: InternalServer
    },
    {
        path: "/icons",
        name: 'icons',
        exact: true,
        pageTitle: "Icons",
        component: Icons
    },
    {
        path: "/icons-feather",
        name: 'icons-feather',
        exact: true,
        pageTitle: "Icons",
        component: IconsFeather
    },
    {
        path: "/icons-line",
        name: 'icons-line',
        exact: true,
        pageTitle: "Icons",
        component: IconsLine
    },
    {
        path: "/icons-flag",
        name: 'icons-flag',
        exact: true,
        pageTitle: "Icons",
        component: IconsFlags
    },
    {
        path: "/icons-payments",
        name: 'icons-payments',
        exact: true,
        pageTitle: "Icons",
        component: IconsPayments
    },
    {
        path: "/charts",
        name: 'charts',
        exact: true,
        pageTitle: "Charts",
        component: Charts
    },
    {
        path: "/charts-e",
        name: 'charts-e',
        exact: true,
        pageTitle: "Charts",
        component: ChartsE
    },
    {
        path: "/charts-c3",
        name: 'charts-c3',
        exact: true,
        pageTitle: "Charts",
        component: ChartsC3
    },
    {
        path: "/charts-knob",
        name: 'charts-knob',
        exact: true,
        pageTitle: "Charts",
        component: ChartsKnob
    },
    {
        path: "/charts-sparkline",
        name: 'charts-sparkline',
        exact: true,
        pageTitle: "Charts",
        component: ChartsSparkline
    },

    {
        path: "/forms",
        name: 'forms',
        exact: true,
        pageTitle: "Forms Elements",
        component: Forms
    },
    {
        path: "/form-advanced",
        name: 'form-advanced',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormAdvanced
    },
    {
        path: "/form-validation",
        name: 'form-validation',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormValidation
    },
    {
        path: "/form-wizard",
        name: 'form-wizard',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormWizard
    },
    {
        path: "/form-summernote",
        name: 'form-summernote',
        exact: true,
        pageTitle: "Forms Elements",
        component: FormSummernote
    },

    {
        path: "/tables",
        name: 'tables',
        exact: true,
        pageTitle: "Tables",
        component: Tables
    },
    {
        path: "/tables-datatable",
        name: 'tables-datatable',
        exact: true,
        pageTitle: "Tables",
        component: DataTables
    },
    {
        path: "/tables-color",
        name: 'tables-color',
        exact: true,
        pageTitle: "Tables",
        component: TablesColor
    },
    {
        path: "/tables-basic",
        name: 'tables-basic',
        exact: true,
        pageTitle: "Tables",
        component: TablesBasic
    },

    {
        path: "/widgets",
        name: 'widgets',
        exact: true,
        pageTitle: "Widgets",
        component: Widgets
    },
    {
        path: "/w-card",
        name: 'w-card',
        exact: true,
        pageTitle: "Widgets",
        component: WCard
    },
    {
        path: "/w-statistics",
        name: 'w-statistics',
        exact: true,
        pageTitle: "Widgets",
        component: WStatistics
    },
    {
        path: "/w-data",
        name: 'w-data',
        exact: true,
        pageTitle: "Widgets",
        component: WData
    },
    {
        path: "/w-social",
        name: 'w-social',
        exact: true,
        pageTitle: "Widgets",
        component: WSocial
    },
    {
        path: "/w-other",
        name: 'w-other',
        exact: true,
        pageTitle: "Widgets",
        component: WOther
    },
    {
        path: "/page-search",
        name: 'page-search',
        exact: true,
        pageTitle: "Search",
        component: Search
    },
    {
        path: "/app-calendar",
        name: 'app-calendar',
        exact: true,
        pageTitle: "Calendar",
        component: AppCalendar
    },
    {
        path: "/app-contact",
        name: 'app-contact',
        exact: true,
        pageTitle: "Contact",
        component: AppContact
    },
    {
        path: "/app-chat",
        name: 'app-chat',
        exact: true,
        pageTitle: "Friends Group",
        component: AppChart
    },
    {
        path: "/app-filemanager",
        name: 'app-filemanager',
        exact: true,
        pageTitle: "File Manager",
        component: AppFilemanager
    },
    {
        path: "/app-setting",
        name: 'app-setting',
        exact: true,
        pageTitle: "App Setting",
        component: AppSetting
    },
    {
        path: "/profile",
        name: 'profile',
        exact: true,
        pageTitle: "My Profile",
        component: Profile
    },
    {
        path: "/maps",
        name: 'maps',
        exact: true,
        pageTitle: "Vector Maps",
        component: Maps
    },
    {
        path: "/gallery",
        name: 'gallery',
        exact: true,
        pageTitle: "Image Gallery",
        component: Gallery
    },
    // Kasai-central
    {
        path: "/territoire-dibaya",
        name: 'Territoire-dibaya',
        exact: true,
        pageTitle: "Territoire de Dibaya",
        component: TerritoireDibaya 
    },
    {
        path: "/territoire-demba",
        name: 'Territoire-demba',
        exact: true,
        pageTitle: "Territoire de Demba",
        component: TerritoireDemba 
    },
    {
        path: "/territoire-kazumba",
        name: 'Territoire-kazumba',
        exact: true,
        pageTitle: "Territoire de Kazumba",
        component: TerritoireKazumba 
    },
    {
        path: "/territoire-luiza",
        name: 'Territoire-luiza',
        exact: true,
        pageTitle: "Territoire de Luiza",
        component: TerritoireLuiza 
    },
    {
        path: "/territoire-dimbelenge",
        name: 'Territoire-dimbelenge',
        exact: true,
        pageTitle: "Territoire de Dimbelenge",
        component: TerritoireDimbelenge 
    },

    
    // Kasai
    {
        path: "/territoire-luebo",
        name: 'Territoire-luebo',
        exact: true,
        pageTitle: "Territoire de Luebo",
        component: TerritoireLuebo 
    },
    {
        path: "/territoire-tshikapa",
        name: 'Territoire-tshikapa',
        exact: true,
        pageTitle: "Territoire de Tshikapa",
        component: TerritoireTshikapa 
    },
    {
        path: "/territoire-ilebo",
        name: 'Territoire-ilebo',
        exact: true,
        pageTitle: "Territoire de Ilebo",
        component: TerritoireIlebo 
    },
    {
        path: "/territoire-mweka",
        name: 'Territoire-mweka',
        exact: true,
        pageTitle: "Territoire de Mweka",
        component: TerritoireMweka 
    },
    {
        path: "/territoire-dekese",
        name: 'Territoire-dekese',
        exact: true,
        pageTitle: "Territoire de Dekese",
        component: TerritoireDekese 
    },

    
    // Kasai-oriental 
    {
        path: "/territoire-miabi",
        name: 'Territoire-miabi',
        exact: true,
        pageTitle: "Territoire de Miabi",
        component: TerritoireMiabi
    },
    {
        path: "/territoire-kabeya-kamwanga",
        name: 'Territoire-kabeya-kamwanga',
        exact: true,
        pageTitle: "Territoire de Kabeya-Kamwanga",
        component: TerritoireKabeyaKamwanga
    },
    {
        path: "/territoire-lupatapata",
        name: 'Territoire-lupatapata',
        exact: true,
        pageTitle: "Territoire de Lupatapata",
        component: TerritoireLupatapata 
    },
    {
        path: "/territoire-katanda",
        name: 'Territoire-katanda',
        exact: true,
        pageTitle: "Territoire de Katanda",
        component: TerritoireKatanda 
    },
    {
        path: "/territoire-tshilenge",
        name: 'Territoire-tshilenge',
        exact: true,
        pageTitle: "Territoire de Tshilenge",
        component: TerritoireTshilenge 
    },
    
    // Lomami 
    {
        path: "/territoire-luilu",
        name: 'Territoire-luilu',
        exact: true,
        pageTitle: "Territoire de Luilu",
        component: TerritoireLuilu
    },
    {
        path: "/territoire-kamiji",
        name: 'Territoire-kamiji',
        exact: true,
        pageTitle: "Territoire de Kamiji",
        component: TerritoireKamiji
    },
    {
        path: "/territoire-ngandajika",
        name: 'Territoire-ngandajika',
        exact: true,
        pageTitle: "Territoire de Ngandajika",
        component: TerritoireNgandajika 
    },
    {
        path: "/territoire-kabinda",
        name: 'Territoire-kabinda',
        exact: true,
        pageTitle: "Territoire de Kabinda",
        component: TerritoireKabinda 
    },
    {
        path: "/territoire-lubao",
        name: 'Territoire-lubao',
        exact: true,
        pageTitle: "Territoire de Lubao",
        component: TerritoireLubao 
    },
    {
        path: "/territoire-mwene-ditu",
        name: 'Territoire-mwene-ditu',
        exact: true,
        pageTitle: "Territoire de Mwene-Ditu",
        component: TerritoireMweneDitu 
    },
    
    // NordKivu
    {
        path: "/territoire-nyiragongo",
        name: 'Territoire-nyiragongo',
        exact: true,
        pageTitle: "Territoire de Nyiragongo",
        component: TerritoireNyiragongo
    },
    {
        path: "/territoire-beni",
        name: 'Territoire-beni',
        exact: true,
        pageTitle: "Territoire de Beni",
        component: TerritoireBeni
    },
    {
        path: "/territoire-lubero",
        name: 'Territoire-lubero',
        exact: true,
        pageTitle: "Territoire de Lubero",
        component: TerritoireLubero
    },
    {
        path: "/territoire-masisi",
        name: 'Territoire-masisi',
        exact: true,
        pageTitle: "Territoire de Masisi",
        component: TerritoireMasisi
    },
    {
        path: "/territoire-rutshuru",
        name: 'Territoire-rutshuru',
        exact: true,
        pageTitle: "Territoire de Rutshuru",
        component: TerritoireRutshuru
    },
    {
        path: "/territoire-walikale",
        name: 'Territoire-walikale',
        exact: true,
        pageTitle: "Territoire de Walikale",
        component: TerritoireWalikale
    },
    
    
    // Ituri
    {
        path: "/territoire-irumu",
        name: 'Territoire-irumu',
        exact: true,
        pageTitle: "Territoire de Irumu",
        component: TerritoireIrumu
    },
    {
        path: "/territoire-mambasa",
        name: 'Territoire-mambasa',
        exact: true,
        pageTitle: "Territoire de Mambasa",
        component: TerritoireMambasa
    },
    {
        path: "/territoire-djugu",
        name: 'Territoire-djugu',
        exact: true,
        pageTitle: "Territoire de Djugu",
        component: TerritoireDjugu
    },
    {
        path: "/territoire-mahagi",
        name: 'Territoire-mahagi',
        exact: true,
        pageTitle: "Territoire de Mahagi",
        component: TerritoireMahagi
    },
    {
        path: "/territoire-aru",
        name: 'Territoire-aru',
        exact: true,
        pageTitle: "Territoire de Aru",
        component: TerritoireAru
    },
    
    
    // SUd-Kivu kK
    {
        path: "/territoire-fizi",
        name: 'Territoire-fizi',
        exact: true,
        pageTitle: "Territoire de Fizi",
        component: TerritoireFizi
    },
    {
        path: "/territoire-kabare",
        name: 'Territoire-kabare',
        exact: true,
        pageTitle: "Territoire de Kabare",
        component: TerritoireKabare
    },
    {
        path: "/territoire-kelehe",
        name: 'Territoire-kelehe',
        exact: true,
        pageTitle: "Territoire de Kelehe",
        component: TerritoireKelehe
    },
    {
        path: "/territoire-mwenga",
        name: 'Territoire-mwenga',
        exact: true,
        pageTitle: "Territoire de Mwenga",
        component: TerritoireMwenga
    },
    {
        path: "/territoire-shabunda",
        name: 'Territoire-shabunda',
        exact: true,
        pageTitle: "Territoire de Shabunda",
        component: TerritoireShabunda
    },
    {
        path: "/territoire-uvira",
        name: 'Territoire-uvira',
        exact: true,
        pageTitle: "Territoire de Uvira",
        component: TerritoireUvira
    },
    {
        path: "/territoire-walungu",
        name: 'Territoire-walungu',
        exact: true,
        pageTitle: "Territoire de Walungu",
        component: TerritoireWalungu
    },

    
    
    // HautLomami kK
    {
        path: "/territoire-kamina",
        name: 'Territoire-kamina',
        exact: true,
        pageTitle: "Territoire de Kamina",
        component: TerritoireKamina
    },
    {
        path: "/territoire-kaniama",
        name: 'Territoire-kaniama',
        exact: true,
        pageTitle: "Territoire de Kaniama",
        component: TerritoireKaniama
    },
    {
        path: "/territoire-kabongo",
        name: 'Territoire-kabongo',
        exact: true,
        pageTitle: "Territoire de Kabongo",
        component: TerritoireKabongo
    },
    {
        path: "/territoire-malemba-nkulu",
        name: 'Territoire-malemba-nkulu',
        exact: true,
        pageTitle: "Territoire de Malemba-Nkulu",
        component: TerritoireMalembaNkulu
    },
    {
        path: "/territoire-bukama",
        name: 'Territoire-bukama',
        exact: true,
        pageTitle: "Territoire de Bukama",
        component: TerritoireBukama
    },
    
    
    // Lualaba kK
    {
        path: "/territoire-mutshatsha",
        name: 'Territoire-mutshatsha',
        exact: true,
        pageTitle: "Territoire de Mutshatsha",
        component: TerritoireMutshatsha
    },
    {
        path: "/territoire-lubudi",
        name: 'Territoire-lubudi',
        exact: true,
        pageTitle: "Territoire de Lubudi",
        component: TerritoireLubudi
    },
    {
        path: "/territoire-dilolo",
        name: 'Territoire-dilolo',
        exact: true,
        pageTitle: "Territoire de Dilolo",
        component: TerritoireDilolo
    },
    {
        path: "/territoire-sandoa",
        name: 'Territoire-sandoa',
        exact: true,
        pageTitle: "Territoire de Sandoa",
        component: TerritoireSandoa
    },
    {
        path: "/territoire-kapanga",
        name: 'Territoire-kapanga',
        exact: true,
        pageTitle: "Territoire de Kapanga",
        component: TerritoireKapanga
    },
    
    // HautKatanga
    {
        path: "/territoire-kipushi",
        name: 'Territoire-kipushi',
        exact: true,
        pageTitle: "Territoire de Kipushi",
        component: TerritoireKipushi
    },
    {
        path: "/territoire-sakania",
        name: 'Territoire-sakania',
        exact: true,
        pageTitle: "Territoire de Sakania",
        component: TerritoireSakania
    },
    {
        path: "/territoire-kasenga",
        name: 'Territoire-kasenga',
        exact: true,
        pageTitle: "Territoire de Kasenga",
        component: TerritoireKasenga
    },
    {
        path: "/territoire-mitwaba",
        name: 'Territoire-mitwaba',
        exact: true,
        pageTitle: "Territoire de Mitwaba",
        component: TerritoireMitwaba
    },
    {
        path: "/territoire-pweto",
        name: 'Territoire-pweto',
        exact: true,
        pageTitle: "Territoire de Pweto",
        component: TerritoirePweto
    },
    {
        path: "/territoire-kambove",
        name: 'Territoire-kambove',
        exact: true,
        pageTitle: "Territoire de Kambove",
        component: TerritoireKambove
    },
];

export default Routes;