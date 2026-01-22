export const vi = {
  // Site
  siteName: 'Pinokochan',
  siteTagline: 'Hàng Nhật chuẩn, giá tốt',
  siteDescription: 'Chuyên cung cấp hàng Nhật nội địa chính hãng',

  // Navigation
  nav: {
    home: 'Trang chủ',
    products: 'Sản phẩm',
    categories: 'Danh mục',
    about: 'Về chúng tôi',
    contact: 'Liên hệ',
  },

  // Common
  common: {
    all: 'Tất cả',
    viewAll: 'Xem tất cả',
    viewMore: 'Xem thêm',
    readMore: 'Đọc thêm',
    back: 'Quay lại',
    search: 'Tìm kiếm',
    loading: 'Đang tải...',
    noResults: 'Không tìm thấy kết quả',
  },

  // Product
  product: {
    price: 'Giá',
    contact: 'Liên hệ đặt hàng',
    specifications: 'Thông số sản phẩm',
    relatedProducts: 'Sản phẩm liên quan',
    featured: 'Nổi bật',
    new: 'Mới',
    origin: 'Xuất xứ',
    material: 'Chất liệu',
    size: 'Kích thước',
    outOfStock: 'Hết hàng',
    inStock: 'Còn hàng',
  },

  // Category
  category: {
    all: 'Tất cả danh mục',
    products: 'sản phẩm',
  },

  // Contact
  contact: {
    title: 'Liên hệ',
    subtitle: 'Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào',
    name: 'Họ và tên',
    email: 'Email',
    phone: 'Số điện thoại',
    message: 'Nội dung',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi...',
    success: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
    error: 'Có lỗi xảy ra. Vui lòng thử lại.',
    hotline: 'Hotline',
    zalo: 'Zalo',
    facebook: 'Facebook',
    address: 'Địa chỉ',
  },

  // About
  about: {
    title: 'Về Pinokochan',
    story: 'Câu chuyện của chúng tôi',
    mission: 'Sứ mệnh',
    quality: 'Cam kết chất lượng',
  },

  // Footer
  footer: {
    quickLinks: 'Liên kết nhanh',
    categories: 'Danh mục',
    contact: 'Liên hệ',
    followUs: 'Theo dõi chúng tôi',
    copyright: '© {year} Pinokochan. All rights reserved.',
    madeWith: 'Made with ♥ in Vietnam',
  },

  // Breadcrumb
  breadcrumb: {
    home: 'Trang chủ',
    products: 'Sản phẩm',
    categories: 'Danh mục',
  },

  // Errors
  errors: {
    notFound: 'Không tìm thấy trang',
    generic: 'Có lỗi xảy ra. Vui lòng thử lại.',
  },
} as const;

export type TranslationKey = keyof typeof vi;
