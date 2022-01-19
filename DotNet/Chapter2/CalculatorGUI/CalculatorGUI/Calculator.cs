using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CalculatorGUI
{
    public partial class Calculator : Form
    {
        public Calculator()
        {
            InitializeComponent();
        }

        private void button10_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "1";
            //NumberTextBox.setText("1"); -Java
        }

        private void button2_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "2";
        }

        private void button3_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "3";
        }

        private void button4_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "4";
        }

        private void button5_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "5";
        }

        private void button6_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "6";
        }

        private void button7_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "7";
        }

        private void button8_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "8";
        }

        private void button9_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "9";
        }

        private void button0_Click(object sender, EventArgs e)
        {
            NumberTextBox.Text = "0";
        }
    }
}
