import Swal from 'sweetalert2'

export const errorAlert = (content: string) => {
  return Swal.fire({
    title: '異常!',
    text: content,
    icon: 'error',
    confirmButtonText: '確定'
  })
}
