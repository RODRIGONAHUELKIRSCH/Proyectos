using System.Windows.Forms;

namespace Tpi_G5_Domus
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btningreso_Click(object sender, EventArgs e)
        {
            panelder.BackgroundImage = null;
            lblTitulo.Visible= true;
            tbusuario.Visible= true;
            tbcontraseña.Visible= true;
            btniniciosesion.Visible= true;

        }

        private void btniniciosesion_Click(object sender, EventArgs e)
        {

        }
    }
}