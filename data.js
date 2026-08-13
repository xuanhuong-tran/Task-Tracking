/*
 * data.js — dữ liệu công việc của huongtx (ZBS Product)
 * -------------------------------------------------------------
 * Nguồn dữ liệu duy nhất cho index.html:
 *   - TODAY_TASKS : việc HÔM NAY (tab "Hôm nay")
 *   - WEEK_TASKS  : tiến độ TUẦN này (tab "Tuần này")
 *
 * Một task có thể xuất hiện ở cả 2 tab — dùng chung `id`.
 *
 * Kết quả chi tiết KHÔNG còn dùng trang detail.html chung nữa.
 * Thay vào đó mỗi task tự khai báo `resultUrl` (+ `resultLabel`)
 * trỏ thẳng tới nơi chứa kết quả thật:
 *   - link Jira / Confluence, hoặc
 *   - 1 file .html báo cáo do huongtx cung cấp (đặt trong /reports)
 * Task nào chưa có kết quả thì bỏ trống 2 field này — item sẽ
 * không hiện link "Xem kết quả".
 */

const TODAY_TASKS = [
  {
    id: 'auto-approve',
    title: 'Scoping auto-approve 2k quota free',
    pillClass: 'pill-done',
    pillLabel: 'Đã xong',
    goalLabel: 'Goal hôm nay:',
    goalText: 'chốt phương án và hoàn thành scoping trong hôm nay.',
    bullets: [
      'Chốt hướng đi tự động hoá: API Trigger (đã so sánh 5 phương án).',
      'Hoàn thiện bộ điều kiện auto-approve: OA + App link ZBS hợp lệ, chưa từng nhận theo OA ID.',
      'Chốt các cơ chế đi kèm: dự phòng, đồng bộ dữ liệu, revoke khi cấp sai, rollout theo giai đoạn, giám sát bất thường.',
      'Nhận đủ thông tin về quy định liên quan để chốt phương án cuối cùng.'
    ],
    resultUrl: 'reports/ZBSP-20-auto-approve-quota-free-2k.html',
    resultLabel: 'Xem báo cáo chi tiết (ZBSP-20) →'
  },
  {
    id: 'monetize-analysis',
    title: 'Phân tích lại tổng quan các feature tiềm năng để monetize',
    pillClass: 'pill-wait',
    pillLabel: 'Sẽ thảo luận',
    goalLabel: 'Goal hôm nay:',
    goalText: 'có bức tranh tổng quan, hoàn thành xong trong hôm nay.',
    bullets: [
      'Hoàn thiện phân tích chi tiết 2 hướng: info card và countdown.',
      'Đánh giá thị trường tiềm năng cho từng hướng.',
      'Tổng hợp thành overview để trình bày.'
    ],
    note: 'Đã có báo cáo phân tích đầy đủ (80%) — nhưng chưa hoàn chỉnh, cần bàn kỹ hơn với anh Vĩ vào ngày mai (14/08) trước khi chốt hướng đi.',
    resultUrl: 'reports/zbs-template-monetization-baocao.html',
    resultLabel: 'Xem báo cáo phân tích (bản nháp, chưa chốt) →'
  },
  {
    id: 'prefix-jira',
    title: 'Scoping & tạo ticket Jira cho prefix button (Zalo Form)',
    pillClass: 'pill-done',
    pillLabel: 'Đã xong',
    goalLabel: 'Goal hôm nay:',
    goalText: 'lên scope và tạo ticket cho 3 phần — Admin Tool (cập nhật componentID/bảng giá), ZBS Account (cập nhật UI tạo/sửa nút liên kết), API (cập nhật logic validate & phân loại link).',
    refHtml: 'Ticket <a href="https://jira.tools.adtima.vn/browse/ZBSP-13" target="_blank" rel="noopener">ZBSP-13</a> (P0, target T7/2026): nhận diện theo domain *.oa.zalo.me / *.ads.zalo.me thay vì theo 6 mẫu link cố định như hiện tại.',
    resultUrl: 'https://jira.tools.adtima.vn/browse/ZCA-4689',
    resultLabel: 'Xem ticket ZCA-4689 →'
  },
  {
    id: 'thanh-ly',
    title: 'Scoping trừ phí quản lý & thanh lý số dư',
    pillClass: 'pill-optional',
    pillLabel: 'Optional',
    optional: true,
    note: 'Task phụ, làm xen kẽ khi có thời gian trống. Chưa hoàn thành.'
  }
];

const WEEK_TASKS = [
  {
    id: 'payment-redesign',
    title: 'Hoàn thành phần redesign cổng thanh toán',
    pillClass: 'pill-done',
    pillLabel: '100%',
    percent: 100,
    fillClass: 'fill-good',
    note: 'Fresh UX Redesign đã hoàn thành — xem spec chi tiết.',
    resultUrl: 'reports/redesign-cong-thanh-toan.html',
    resultLabel: 'Xem spec Fresh Approach →'
  },
  {
    id: 'auto-approve',
    title: 'Scoping phần auto-approve 2k quota free',
    pillClass: 'pill-done',
    pillLabel: '100%',
    percent: 100,
    fillClass: 'fill-good',
    note: 'Hướng đi: API. Đã hoàn thành review.',
    resultUrl: 'reports/ZBSP-20-auto-approve-quota-free-2k.html',
    resultLabel: 'Xem báo cáo chi tiết (ZBSP-20) →'
  },
  {
    id: 'prefix-jira',
    title: 'Scoping & tạo ticket Jira cho prefix button (Zalo Form)',
    pillClass: 'pill-done',
    pillLabel: 'Đã xong',
    note: 'Đã scoping và tạo các ticket Jira liên quan.',
    resultUrl: 'https://jira.tools.adtima.vn/browse/ZCA-4689',
    resultLabel: 'Xem ticket ZCA-4689 →'
  },
  {
    id: 'sdt-ticket',
    title: 'Tạo ticket Jira cho phần spec thu thập số điện thoại',
    pillClass: 'pill-done',
    pillLabel: 'Đã xong',
    note: 'Đã thống nhất spec, tạo ticket và xác nhận với các bên liên quan.',
    resultUrl: 'https://jira.tools.adtima.vn/browse/ZCA-4319',
    resultLabel: 'Xem ticket ZCA-4319 →'
  },
  {
    id: 'monetize-analysis',
    title: 'Phân tích lại các feature có thể monetize',
    pillClass: 'pill-good',
    pillLabel: '80%',
    percent: 80,
    fillClass: 'fill-good',
    note: 'Báo cáo phân tích đầy đủ đã có nhưng chưa hoàn chỉnh — sẽ họp thống nhất hướng đi với anh Vĩ vào ngày mai (14/08).',
    resultUrl: 'reports/zbs-template-monetization-baocao.html',
    resultLabel: 'Xem báo cáo phân tích (bản nháp, chưa chốt) →'
  },
  {
    id: 'thanh-ly',
    title: 'Thanh lý số dư',
    pillClass: 'pill-low',
    pillLabel: 'Tiến độ ít',
    percent: 15,
    pctLabel: '~15%',
    fillClass: 'fill-low',
    note: 'Chưa hoàn thành.'
  }
];

const WEEK_RANGE = '11/08 – 22/08/2026';
