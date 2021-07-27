/* eslint import/no-webpack-loader-syntax: 0 */
/* eslint sort-imports: 'error' */
/* eslint sort-keys: 'error' */
// import adminLogo from '@/assets/admin-logo.svg';
// import alignCenter from '@/assets/editor/align_center.svg';
// import alignLeft from '@/assets/editor/align_left.svg';
// import alignRight from '@/assets/editor/align_right.svg';
// import arrow from '@/assets/icon-arrow.svg';
// import arrowDouble from '@/assets/icon-arrow-double.svg';
// import avatar from '@/assets/icon-avatar.svg';
// import backArrow from '@/assets/icon-backarrow.svg';
// import bell from '@/assets/icon-bell.svg';
// import calendar from '@/assets/icon-calendar.svg';
// import check from '@/assets/icon-check.svg';
// import checkCircle from '@/assets/icon-check-circle.svg';
// import close from '@/assets/icon-close.svg';
// import cross from '@/assets/icon-cross.svg';
// import editorBold from '@/assets/editor/bold.svg';
// import editorChecklist from '@/assets/editor/checklist.svg';
// import editorCode from '@/assets/editor/code.svg';
// import editorDiagram from '@/assets/editor/diagram.svg';
// import editorHighlight from '@/assets/editor/highlight.svg';
// import editorHr from '@/assets/editor/hr.svg';
// import editorImage from '@/assets/editor/image.svg';
// import editorInfo from '@/assets/editor/info.svg';
// import editorItalic from '@/assets/editor/italic.svg';
// import editorLink from '@/assets/editor/link.svg';
// import editorNote from '@/assets/editor/note.svg';
// import editorOl from '@/assets/editor/ol.svg';
// import editorParagraph from '@/assets/editor/paragraph.svg';
// import editorQuote from '@/assets/editor/quote.svg';
// import editorRedo from '@/assets/editor/redo.svg';
// import editorRemove from '@/assets/editor/remove.svg';
// import editorStrike from '@/assets/editor/strike.svg';
// import editorSuccess from '@/assets/editor/success.svg';
// import editorTable from '@/assets/editor/table.svg';
// import editorUl from '@/assets/editor/ul.svg';
// import editorUnderline from '@/assets/editor/underline.svg';
// import editorUndo from '@/assets/editor/undo.svg';
// import editorWarning from '@/assets/editor/warning.svg';
// import filter from '@/assets/icon-filter.svg';
// import floatLeft from '@/assets/editor/float_left.svg';
// import floatRight from '@/assets/editor/float_right.svg';
// import home from '@/assets/icon-home.svg';
// import list from '@/assets/icon-list.svg';
// import listIn from '@/assets/icon-list-in.svg';
// import lock from '@/assets/icon-lock.svg';
// import logout from '@/assets/icon-logout.svg';
// import message from '@/assets/icon-msg.svg';
// import newWindow from '@/assets/icon-new-window.svg';
// import pencil from '@/assets/icon-pencil.svg';
// import people from '@/assets/icon-people.svg';
// import plus from '@/assets/icon-plus.svg';
// import recommendation from '@/assets/icon-recommendation.svg';
// import reply from '@/assets/icon-reply.svg';
// import search from '@/assets/icon-search.svg';
// import sort from '@/assets/icon-sort.svg';
// import sortAsc from '@/assets/icon-sort-asc.svg';
// import sortDesc from '@/assets/icon-sort-desc.svg';
// import textCenter from '@/assets/editor/text_align_center.svg';
// import textLeft from '@/assets/editor/text_align_left.svg';
// import textRight from '@/assets/editor/text_align_right.svg';
// import time from '@/assets/icon-time-black.svg';
// import trash from '@/assets/icon-trash.svg';
// import upload from '@/assets/icon-upload.svg';
// import warning from '@/assets/icon-warning.svg';

const ICONS = {
  // adminLogo,
  // alignCenter,
  // alignLeft,
  // alignRight,
  // arrow,
  // arrowDouble,
  // aspect,
  // avatar,
  // backArrow,
  // bell,
  // calendar,
  // check,
  // checkCircle,
  // close,
  // cog,
  // cross,
  // download,
  // editorBold,
  // editorChecklist,
  // editorCode,
  // editorDiagram,
  // editorHighlight,
  // editorHr,
  // editorImage,
  // editorInfo,
  // editorItalic,
  // editorLink,
  // editorNote,
  // editorOl,
  // editorParagraph,
  // editorQuote,
  // editorRedo,
  // editorRemove,
  // editorStrike,
  // editorSuccess,
  // editorTable,
  // editorUl,
  // editorUnderline,
  // editorUndo,
  // editorWarning,
  // eye,
  // filter,
  // floatLeft,
  // floatRight,
  // home,
  // list,
  // listIn,
  // lock,
  // logout,
  // message,
  // newWindow,
  // paperClip,
  // pencil,
  // people,
  // plus,
  // recommendation,
  // reply,
  // search,
  // sort,
  // sortAsc,
  // sortDesc,
  // textCenter,
  // textLeft,
  // textRight,
  // time,
  // trash,
  // upload,
  // warning,
};

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

Object.keys(ICONS).forEach((key) => {
  const dashKey = camelCaseToDash(key);
  ICONS[dashKey] = ICONS[key];
});

export default ICONS;
